'use client';

import ClassCard from '../components/ClassCard';
import { motion } from 'framer-motion';

const Home = () => {
  const classes = [
    {
      name: 'Kelas SI',
      friends: [
        { name: 'Asep', imageUrl: '/avatars/fajar.jpg'},
        { name: 'Budi', imageUrl: '/avatars/fajar.jpg'},
        { name: 'Citra', imageUrl: '/avatars/cewe.png'},
           ],
    },
    {
      name: 'Kelas KA',
      friends: [
        { name: 'Fajar', imageUrl: '/avatars/fajar.jpg' },
        { name: 'Gina', imageUrl: '/avatars/cewe.png'},
        { name: 'Hadi', imageUrl: '/avatars/fajar.jpg'},
          ],
    },
    {
      name: 'Kelas BD',
      friends: [
        { name: 'Kiki', imageUrl: '/avatars/fajar.jpg'},
        { name: 'Lina', imageUrl: '/avatars/cewe.png'},
        { name: 'Mira', imageUrl: '/avatars/cewe.png'},
          ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-10 px-4 flex flex-col items-center">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-indigo-800 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎓 Daftar Kelas & Teman Terbaik
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {classes.map((classItem, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ClassCard className={classItem.name} friends={classItem.friends} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
