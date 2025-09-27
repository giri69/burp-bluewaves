// Dashboard page showing investment clusters and portfolio overview
// Features responsive grid of cluster cards with create-your-own option

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '../mock/api';
import ClusterCard from '../components/ClusterCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [clusters, setClusters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load clusters on component mount
  useEffect(() => {
    const loadClusters = async () => {
      try {
        setLoading(true);
        const clustersData = await mockApi.getClusters();
        setClusters(clustersData);
      } catch (error) {
        console.error('Failed to load clusters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadClusters();
  }, []);

  // Handle cluster selection
  const handleClusterClick = (clusterId) => {
    navigate(`/cluster/${clusterId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your investment clusters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dashboard-gradient relative">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-white to-gold opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-gold-light to-gold opacity-30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-r from-gold to-gold-dark opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-r from-white to-gold-light opacity-25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-white bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 20px hsl(42, 100%, 50%, 0.3)",
                "0 0 40px hsl(42, 100%, 50%, 0.6)",
                "0 0 20px hsl(42, 100%, 50%, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Investment Dashboard
          </motion.h1>
          <p className="text-2xl text-foreground font-medium">
            Explore AI-curated cryptocurrency clusters with futuristic precision
          </p>
        </motion.div>

        {/* Futuristic Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold rounded-3xl p-8 border-3 border-gold shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.02, y: -4 }}
            animate={{
              boxShadow: [
                "0 8px 32px hsl(42, 100%, 50%, 0.2)",
                "0 12px 40px hsl(42, 100%, 50%, 0.4)",
                "0 8px 32px hsl(42, 100%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">Total Portfolio Value</h3>
            <p className="text-4xl font-bold text-foreground mb-2 relative z-10">$12,847.32</p>
            <p className="text-green-600 text-lg font-semibold relative z-10">+8.2% (24h)</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold rounded-3xl p-8 border-3 border-gold shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.02, y: -4 }}
            animate={{
              boxShadow: [
                "0 8px 32px hsl(42, 100%, 50%, 0.2)",
                "0 12px 40px hsl(42, 100%, 50%, 0.4)",
                "0 8px 32px hsl(42, 100%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, delay: 1 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">Active Clusters</h3>
            <p className="text-4xl font-bold text-foreground mb-2 relative z-10">3</p>
            <p className="text-blue-600 text-lg font-semibold relative z-10">2 outperforming market</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-white via-gold-light to-gold rounded-3xl p-8 border-3 border-gold shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.02, y: -4 }}
            animate={{
              boxShadow: [
                "0 8px 32px hsl(42, 100%, 50%, 0.2)",
                "0 12px 40px hsl(42, 100%, 50%, 0.4)",
                "0 8px 32px hsl(42, 100%, 50%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, delay: 2 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">Average APY</h3>
            <p className="text-4xl font-bold text-foreground mb-2 relative z-10">15.1%</p>
            <p className="text-green-600 text-lg font-semibold relative z-10">Above market average</p>
          </motion.div>
        </motion.div>

        {/* Clusters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Existing Clusters */}
          {clusters.map((cluster) => (
            <motion.div key={cluster.id} variants={itemVariants}>
              <ClusterCard 
                cluster={cluster}
                onClick={() => handleClusterClick(cluster.id)}
              />
            </motion.div>
          ))}

          {/* Futuristic Create Your Own Cluster Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              onClick={() => console.log('Create custom cluster - feature coming soon')}
              className="bg-gradient-to-br from-white via-gold-light to-gold rounded-3xl p-10 h-full min-h-[400px] flex flex-col items-center justify-center text-center cursor-pointer border-4 border-dashed border-gold hover:border-gold-dark transition-all duration-500 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -8 }}
              animate={{
                boxShadow: [
                  "0 8px 32px hsl(42, 100%, 50%, 0.2)",
                  "0 12px 40px hsl(42, 100%, 50%, 0.4)",
                  "0 8px 32px hsl(42, 100%, 50%, 0.2)"
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, delay: 3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="w-28 h-28 bg-gradient-to-br from-gold to-gold-dark rounded-3xl flex items-center justify-center mb-8 relative z-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg className="w-14 h-14 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Create Your Own Cluster</h3>
              <p className="text-foreground text-lg mb-8 leading-relaxed relative z-10">
                Build a custom investment cluster with your preferred tokens and allocation strategy
              </p>
              
              <motion.div 
                className="inline-flex items-center text-foreground font-bold text-xl relative z-10"
                animate={{
                  x: [0, 8, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>Get Started</span>
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Futuristic Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-10 bg-gradient-to-r from-gold via-gold-light to-white bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 10px hsl(42, 100%, 50%, 0.3)",
                "0 0 20px hsl(42, 100%, 50%, 0.6)",
                "0 0 10px hsl(42, 100%, 50%, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Quick Actions
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-white via-gold-light to-gold text-foreground rounded-2xl font-bold text-lg transition-all duration-300 border-3 border-gold shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View All Transactions</span>
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-white via-gold-light to-gold text-foreground rounded-2xl font-bold text-lg transition-all duration-300 border-3 border-gold shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Portfolio Analytics</span>
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-white via-gold-light to-gold text-foreground rounded-2xl font-bold text-lg transition-all duration-300 border-3 border-gold shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Rebalancing History</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
