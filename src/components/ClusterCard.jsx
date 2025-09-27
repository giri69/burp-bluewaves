// Cluster card component for dashboard
// Shows cluster info with overlapping token icons and hover effects

import React from 'react';
import { motion } from 'framer-motion';
import TokenBadge from './TokenBadge';

const ClusterCard = ({ cluster, onClick }) => {
  // Get risk color
  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'medium-high': return 'text-orange-600 bg-orange-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="cluster-card rounded-3xl p-8 cursor-pointer h-full min-h-[400px] flex flex-col relative group"
    >
      {/* Futuristic Circular Cluster Representation */}
      <div className="flex items-center justify-center mb-8">
        <div className="futuristic-cluster">
          {/* Orbital Rings */}
          <motion.div className="cluster-orbit cluster-orbit-1">
            <motion.div
              className="orbit-token"
              style={{
                top: '-12px',
                left: '50%',
                marginLeft: '-12px'
              }}
              animate={{
                rotateZ: [0, -360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {cluster.tokens[0]?.symbol.slice(0, 2)}
            </motion.div>
          </motion.div>
          
          <motion.div className="cluster-orbit cluster-orbit-2">
            <motion.div
              className="orbit-token"
              style={{
                top: '-12px',
                left: '50%',
                marginLeft: '-12px'
              }}
              animate={{
                rotateZ: [0, 360]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {cluster.tokens[1]?.symbol.slice(0, 2)}
            </motion.div>
            {cluster.tokens[2] && (
              <motion.div
                className="orbit-token"
                style={{
                  bottom: '-12px',
                  left: '50%',
                  marginLeft: '-12px'
                }}
                animate={{
                  rotateZ: [0, 360]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {cluster.tokens[2]?.symbol.slice(0, 2)}
              </motion.div>
            )}
          </motion.div>
          
          <motion.div className="cluster-orbit cluster-orbit-3">
            <motion.div
              className="orbit-token"
              style={{
                top: '-12px',
                left: '50%',
                marginLeft: '-12px'
              }}
              animate={{
                rotateZ: [0, -360]
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {cluster.tokens[3]?.symbol.slice(0, 2)}
            </motion.div>
            {cluster.tokens[4] && (
              <motion.div
                className="orbit-token"
                style={{
                  right: '-12px',
                  top: '50%',
                  marginTop: '-12px'
                }}
                animate={{
                  rotateZ: [0, -360]
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {cluster.tokens[4]?.symbol.slice(0, 2)}
              </motion.div>
            )}
            {cluster.tokens[5] && (
              <motion.div
                className="orbit-token"
                style={{
                  left: '-12px',
                  top: '50%',
                  marginTop: '-12px'
                }}
                animate={{
                  rotateZ: [0, -360]
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {cluster.tokens[5]?.symbol.slice(0, 2)}
              </motion.div>
            )}
          </motion.div>
          
          {/* Central Core */}
          <motion.div 
            className="cluster-core"
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.span 
              className="text-foreground font-bold text-xl"
              animate={{
                textShadow: [
                  "0 0 0px hsl(42, 100%, 30%)", 
                  "0 0 10px hsl(42, 100%, 30%)", 
                  "0 0 0px hsl(42, 100%, 30%)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {cluster.name.split(' ').map(word => word[0]).join('')}
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Risk Badge with Gradient */}
      <div className="absolute top-8 right-8">
        <motion.div 
          className={`px-5 py-3 rounded-full text-sm font-bold border-3 bg-gradient-to-r from-white to-gold-light shadow-lg ${getRiskColor(cluster.stats.risk)}`}
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              "0 0 10px hsl(42, 100%, 50%, 0.3)",
              "0 0 20px hsl(42, 100%, 50%, 0.6)",
              "0 0 10px hsl(42, 100%, 50%, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          {cluster.stats.risk}
        </motion.div>
      </div>

      {/* Enhanced Content */}
      <div className="flex-1 text-center relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-foreground mb-4"
          animate={{
            textShadow: [
              "0 0 0px hsl(42, 100%, 40%)",
              "0 0 5px hsl(42, 100%, 40%)",
              "0 0 0px hsl(42, 100%, 40%)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {cluster.name}
        </motion.h3>
        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{cluster.description}</p>
        
        {/* Futuristic Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold p-5 rounded-2xl border-3 border-gold shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 4px 16px hsl(42, 50%, 50%, 0.2)",
                "0 8px 24px hsl(42, 50%, 50%, 0.4)",
                "0 4px 16px hsl(42, 50%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <div className="text-xs font-medium text-foreground opacity-80 mb-2">Total Value</div>
            <div className="font-bold text-foreground text-lg">{cluster.stats.totalValue}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold p-5 rounded-2xl border-3 border-gold shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 4px 16px hsl(120, 50%, 50%, 0.2)",
                "0 8px 24px hsl(120, 50%, 50%, 0.4)",
                "0 4px 16px hsl(120, 50%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 }
            }}
          >
            <div className="text-xs font-medium text-foreground opacity-80 mb-2">APY</div>
            <div className="font-bold text-green-700 text-lg">{cluster.stats.apy}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold p-5 rounded-2xl border-3 border-gold shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 4px 16px hsl(42, 50%, 50%, 0.2)",
                "0 8px 24px hsl(42, 50%, 50%, 0.4)",
                "0 4px 16px hsl(42, 50%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, delay: 1 }
            }}
          >
            <div className="text-xs font-medium text-foreground opacity-80 mb-2">Assets</div>
            <div className="font-bold text-foreground text-lg">{cluster.stats.tokens}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic CTA */}
      <motion.div 
        className="mt-auto relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="bg-gradient-to-r from-white via-gold-light to-gold w-full py-5 rounded-3xl text-center font-bold text-lg flex items-center justify-center border-3 border-gold shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <span className="relative z-10 text-foreground">Analyze Cluster</span>
          <motion.svg 
            className="ml-3 w-6 h-6 relative z-10 text-foreground" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ 
              x: [0, 8, 0],
              filter: [
                "drop-shadow(0 0 0px hsl(42, 100%, 50%))",
                "drop-shadow(0 0 8px hsl(42, 100%, 50%))",
                "drop-shadow(0 0 0px hsl(42, 100%, 50%))"
              ]
            }}
            transition={{ 
              x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClusterCard;