"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, OrbitControls, RoundedBox } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/hooks";

type ModuleId = "LMS" | "WOO" | "API" | "AI" | "SEC";

const MODULES: { id: ModuleId; label: string; colorA: string; colorB: string; blurb: string }[] = [
  { id: "LMS", label: "LMS Core", colorA: "#38f2ff", colorB: "#0b0f14", blurb: "LearnDash/LifterLMS/BuddyBoss add‑ons and integrations." },
  { id: "WOO", label: "Woo Engine", colorA: "#b57cff", colorB: "#0b0f14", blurb: "WooCommerce patterns: checkout, subscriptions, payments, admin UX." },
  { id: "API", label: "API Connect", colorA: "#38f2ff", colorB: "#0b0f14", blurb: "REST integrations, webhooks, clean boundaries between services." },
  { id: "AI", label: "AI Core", colorA: "#b57cff", colorB: "#0b0f14", blurb: "Summaries/transcripts, intelligent UX, automation-friendly workflows." },
  { id: "SEC", label: "Security", colorA: "#38f2ff", colorB: "#0b0f14", blurb: "Hardening, sanitization/validation, permissions, safe hooks." },
];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function Module({
  i,
  id,
  label,
  colorA,
  colorB,
  blurb,
  onSelect,
  selected,
  reducedMotion,
  scrollP,
}: {
  i: number;
  id: ModuleId;
  label: string;
  colorA: string;
  colorB: string;
  blurb: string;
  onSelect: (id: ModuleId) => void;
  selected: boolean;
  reducedMotion: boolean;
  scrollP: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);

  const base = useMemo(() => {
    const radius = 2.05;
    const angle = (i / MODULES.length) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, 0.35 + (i % 2) * 0.25, Math.sin(angle) * radius);
  }, [i]);

  const mat = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorB),
      metalness: 0.35,
      roughness: 0.25,
      emissive: new THREE.Color(colorA),
      emissiveIntensity: 0.08,
    });
    return m;
  }, [colorA, colorB]);

  const edge = useMemo(() => new THREE.Color(colorA), [colorA]);

  useFrame((state, delta) => {
    const obj = ref.current;
    // scroll-driven assembly: gradually move towards center as user scrolls the page
    const t = easeInOut(Math.min(1, Math.max(0, (scrollP - 0.02) / 0.22)));
    const target = base.clone().lerp(new THREE.Vector3(0, 0.35 + i * 0.02, 0), t * 0.7);

    obj.position.lerp(target, reducedMotion ? 0.08 : 0.06);

    const spin = reducedMotion ? 0 : delta * 0.25;
    obj.rotation.y += spin;
    const tilt = (hover ? 0.2 : 0.06) + (selected ? 0.12 : 0);
    obj.rotation.x = THREE.MathUtils.lerp(obj.rotation.x, tilt, 0.08);
    obj.rotation.z = THREE.MathUtils.lerp(obj.rotation.z, hover ? -0.12 : 0, 0.08);

    // emissive pulse for selected / AI
    const pulse = selected ? 0.22 : id === "AI" ? 0.14 : 0.08;
    mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, pulse, 0.06);
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.45} floatIntensity={reducedMotion ? 0 : 0.7}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={() => onSelect(id)}
      >
        <RoundedBox args={[1.05, 0.55, 0.78]} radius={0.12} smoothness={6} />
        <primitive object={mat} attach="material" />
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1.05, 0.55, 0.78)]} />
          <lineBasicMaterial attach="material" color={edge} transparent opacity={hover ? 0.7 : 0.35} />
        </lineSegments>

        <Html center distanceFactor={9}>
          <div style={{
            transform: "translateY(-4px)",
            padding: "8px 10px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            color: "rgba(255,255,255,0.9)",
            fontSize: 12,
            whiteSpace: "nowrap",
            pointerEvents: "none"
          }}>
            <strong style={{ fontWeight: 700 }}>{label}</strong>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function Desk() {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0b0f14"),
    metalness: 0.25,
    roughness: 0.45,
    emissive: new THREE.Color("#0b0f14"),
    emissiveIntensity: 0.05,
  }), []);
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.25, 0]} receiveShadow>
      <circleGeometry args={[6.2, 64]} />
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

function Cables({ reducedMotion, scrollP }: { reducedMotion: boolean; scrollP: number }) {
  const group = useRef<THREE.Group>(null!);
  const curves = useMemo(() => {
    // simple bezier-like curves from outer ring to center
    const out: THREE.CatmullRomCurve3[] = [];
    const radius = 2.05;
    for (let i = 0; i < MODULES.length; i++) {
      const a = (i / MODULES.length) * Math.PI * 2;
      const p0 = new THREE.Vector3(Math.cos(a) * radius, 0.25, Math.sin(a) * radius);
      const p1 = new THREE.Vector3(Math.cos(a) * radius * 0.55, 0.05, Math.sin(a) * radius * 0.55);
      const p2 = new THREE.Vector3(0, 0.15, 0);
      out.push(new THREE.CatmullRomCurve3([p0, p1, p2]));
    }
    return out;
  }, []);

  useFrame(() => {
    const t = easeInOut(Math.min(1, Math.max(0, (scrollP - 0.02) / 0.22)));
    if (group.current) group.current.scale.setScalar(0.55 + t * 0.55);
  });

  return (
    <group ref={group}>
      {curves.map((c, idx) => (
        <mesh key={idx}>
          <tubeGeometry args={[c, 64, 0.02, 10, false]} />
          <meshStandardMaterial
            color={new THREE.Color("#38f2ff")}
            emissive={new THREE.Color("#38f2ff")}
            emissiveIntensity={reducedMotion ? 0.08 : 0.16}
            transparent
            opacity={0.22}
            roughness={0.2}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ModuleLab({
  onSelect,
  selectedId,
}: {
  onSelect: (id: ModuleId) => void;
  selectedId: ModuleId;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const scrollP = useScrollProgress();

  return (
    <Canvas
      shadows={!reducedMotion}
      dpr={[1, 2]}
      camera={{ position: [0, 1.8, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow={!reducedMotion} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-2, 1.2, -2]} intensity={1.0} />

      <group position={[0, 0.2, 0]}>
        <Cables reducedMotion={reducedMotion} scrollP={scrollP} />
        <Desk />
        {MODULES.map((m, i) => (
          <Module
            key={m.id}
            i={i}
            id={m.id}
            label={m.label}
            colorA={m.colorA}
            colorB={m.colorB}
            blurb={m.blurb}
            onSelect={onSelect}
            selected={m.id === selectedId}
            reducedMotion={reducedMotion}
            scrollP={scrollP}
          />
        ))}
      </group>

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 2.1}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}

export function blurbFor(id: ModuleId) {
  return MODULES.find((m) => m.id === id)?.blurb ?? "";
}
