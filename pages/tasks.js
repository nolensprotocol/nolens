// pages/tasks.js
import Head from 'next/head';
import { useState } from 'react';

const initialTasks = [
  { id: 1, name: '✅ Follow @nolensprotocol on X', action: 'follow', points: 10, completed: false },
  { id: 2, name: '💬 Quote retweet our pinned tweet', action: 'retweet', points: 20, completed: false },
  { id: 3, name: '✉️ Join our email waitlist', action: 'email', points: 10, completed: false },
  { id: 4, name: '🌐 Refer a friend with your link', action: 'refer', points: 30, completed: false },
  { id: 5, name: '🗳️ Vote on a feature idea', action: 'vote', points: 10, completed: false },
  { id: 6, name: '🧠 Complete the Nolens quiz', action: 'quiz', points: 10, completed: false },
  { id: 7, name: '📲 Join our Telegram group', action: 'telegram', points: 10, completed: false },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [points, setPoints] = useState(0);

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id && !task.completed) {
        setPoints(prev => prev + task.points);
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <Head>
        <title>Tasks - Earn $NOL</title>
        <meta name="description" content="Complete tasks and earn mock points in Nolens MVP." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🎯 Tasks</h1>
          <p className="text-gray-600">Earn mock points by completing simple actions that support the Nolens ecosystem.</p>
          <div className="mt-4 font-semibold">Your points: <span className="text-indigo-600">{points}</span> / 100</div>
        </div>

        <div className="max-w-2xl mx-auto grid gap-6">
          {tasks.map(task => (
            <div key={task.id} className="border rounded-lg p-4 flex justify-between items-center shadow-md">
              <div>
                <h3 className="font-semibold text-lg">{task.name}</h3>
                <p className="text-sm text-gray-500">+{task.points} points</p>
              </div>
              <button
                onClick={() => handleComplete(task.id)}
                disabled={task.completed}
                className={`px-4 py-2 rounded text-white font-medium transition ${task.completed ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
              >
                {task.completed ? 'Done' : 'Complete'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
