"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
    id?: string;
    color?: string;
    density?: number;
}

const ParticleBackground = ({ id = "tsparticles", color = "#3B82F6", density = 50 }: ParticleBackgroundProps) => {
    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    };

    return (
        <Particles
            id={id}
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: color,
                    },
                    links: {
                        color: color,
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1, // Slower, more elegant
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: density,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 pointer-events-none"
        />
    );
};

export default ParticleBackground;
