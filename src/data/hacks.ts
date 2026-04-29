export interface StudyHack {
  id: string;
  title: string;
  description: string;
  category: 'Focus' | 'Memory' | 'Wellness' | 'Method';
}

export const STUDY_HACKS: StudyHack[] = [
  {
    id: '1',
    title: 'The Rule of Three',
    description: 'Group study works best with three people. Two people drift to chat, four split into pairs. Three keeps everyone honest.',
    category: 'Method'
  },
  {
    id: '2',
    title: 'Two-Minute Start Rule',
    description: 'Promise yourself only two minutes on the task. Starting is the hardest part. Momentum will carry you further.',
    category: 'Focus'
  },
  {
    id: '3',
    title: '90-Minute Ultradian Block',
    description: 'Your brain runs on 90-minute cycles. Focus hard for 90 mins, then take a 20-min break to recharge neurotransmitters.',
    category: 'Focus'
  },
  {
    id: '4',
    title: 'Method of Loci',
    description: 'Visualize a familiar room and place facts in specific spots. Walk through the room in your mind to recall them.',
    category: 'Memory'
  },
  {
    id: '5',
    title: 'Hydrate Before Caffeine',
    description: 'Drink a full glass of water before your first coffee. Dehydrated brains feel tiredness as thirst.',
    category: 'Wellness'
  },
  {
    id: '6',
    title: 'Feynman Technique',
    description: 'Explain a concept to a 5-year-old. If you can\'t explain it simply, you don\'t understand it well enough.',
    category: 'Method'
  },
  {
    id: '7',
    title: 'Active Recall',
    description: 'Don\'t re-read. Close the book and write down everything you remember. This forces the brain to build connections.',
    category: 'Memory'
  },
  {
    id: '8',
    title: 'Phone in Another Room',
    description: 'Out of sight, out of mind. Even having a phone on the desk reduces cognitive capacity by 10%.',
    category: 'Focus'
  },
  {
    id: '9',
    title: 'Cold Room Bias',
    description: 'A slightly cool room (around 20°C) keeps you alert. Warm rooms invite the "afternoon slump".',
    category: 'Wellness'
  },
  {
    id: '10',
    title: 'The Done List',
    description: 'Instead of just a To-Do list, keep a "Done" list. It creates a dopamine loop that keeps you motivated.',
    category: 'Focus'
  },
  {
    id: '11',
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals (1 day, 3 days, 1 week, 1 month) to lock it into long-term memory.',
    category: 'Memory'
  },
  {
    id: '12',
    title: 'Eat the Frog',
    description: 'Do your hardest task first thing in the morning when your willpower is highest.',
    category: 'Focus'
  },
  {
    id: '13',
    title: 'Pareto Principle (80/20)',
    description: '80% of your results come from 20% of your efforts. Identify the most important concepts and master them first.',
    category: 'Method'
  },
  {
    id: '14',
    title: 'Pomodoro Technique',
    description: 'Focus for 25 minutes, then break for 5. It prevents mental fatigue and keeps the brain fresh for longer sessions.',
    category: 'Focus'
  },
  {
    id: '15',
    title: 'Blue Light Filter',
    description: 'Use a blue light filter at night. Blue light suppresses melatonin, making it harder to sleep after a late session.',
    category: 'Wellness'
  },
  {
    id: '16',
    title: 'Zeigarnik Effect',
    description: 'Stop studying mid-sentence or mid-problem. Your brain will stay curious and find it easier to restart later.',
    category: 'Memory'
  },
  {
    id: '17',
    title: 'SQ3R Method',
    description: 'Survey, Question, Read, Recite, Review. A systematic approach to deep reading and comprehension.',
    category: 'Method'
  },
  {
    id: '18',
    title: 'Interleaving',
    description: 'Don\'t study one subject for hours. Switch between different topics. It forces the brain to reload and strengthen memories.',
    category: 'Method'
  },
  {
    id: '19',
    title: 'Napping Strategy',
    description: 'Take a 20-minute power nap or a 90-minute full cycle. Avoid 45-60 min naps as they cause sleep inertia.',
    category: 'Wellness'
  },
  {
    id: '20',
    title: 'Mind Mapping',
    description: 'Use visual diagrams to connect ideas. Your brain thinks in networks, not lists.',
    category: 'Memory'
  },
  {
    id: '21',
    title: 'White Noise',
    description: 'Use steady background noise to drown out sudden distractions. Constant sound is easier to ignore.',
    category: 'Focus'
  },
  {
    id: '22',
    title: 'Standing Desk hack',
    description: 'Stand for 15 mins every hour. It increases blood flow to the brain and keeps you alert.',
    category: 'Wellness'
  },
  {
    id: '23',
    title: 'Lofi over Lyrics',
    description: 'Listen to music without words. Lyrics compete for the same brain processing power as reading.',
    category: 'Focus'
  },
  {
    id: '24',
    title: 'The Blurting Method',
    description: 'Read a page, close it, and write down everything you remember in a hurry. Then check what you missed.',
    category: 'Memory'
  },
  {
    id: '25',
    title: 'Gamma Waves',
    description: 'Listen to 40Hz binaural beats. They are associated with high-level cognitive processing and focus.',
    category: 'Focus'
  },
  {
    id: '26',
    title: 'Leitner System',
    description: 'A flashcard method where correctly answered cards are moved to boxes with longer review intervals.',
    category: 'Memory'
  },
  {
    id: '27',
    title: 'Batch Tasks',
    description: 'Group similar tasks (e.g., all emails, all math problems) to reduce context-switching cost.',
    category: 'Focus'
  },
  {
    id: '28',
    title: 'Dopamine Fast',
    description: 'Remove all digital distractions for 4 hours. Reset your sensitivity to boring but necessary tasks.',
    category: 'Focus'
  },
  {
    id: '29',
    title: 'Sunlight Exposure',
    description: 'Get 10 mins of morning sunlight. It regulates your circadian rhythm and improves late-night focus.',
    category: 'Wellness'
  },
  {
    id: '30',
    title: 'Cornell Note-Taking',
    description: 'Divide your page: Cues on left, Notes on right, Summary at bottom. Instant review structure.',
    category: 'Method'
  },
  {
    id: '31',
    title: 'Cognitive Offloading',
    description: 'Write down every random thought that pops up. Clear the RAM of your brain so it can focus on the task.',
    category: 'Focus'
  },
  {
    id: '32',
    title: 'Cold Water Face Splash',
    description: 'Activates the mammalian dive reflex, lowering heart rate and resetting focus instantly.',
    category: 'Wellness'
  },
  {
    id: '33',
    title: 'Analog Morning',
    description: 'Don\'t touch your phone for the first 30 mins. Reclaim your attention before the world grabs it.',
    category: 'Focus'
  },
  {
    id: '34',
    title: 'Smell association',
    description: 'Use a specific scent (like peppermint) while studying, then use it again during the exam to trigger recall.',
    category: 'Memory'
  },
  {
    id: '35',
    title: 'Gum Chewing',
    description: 'Chewing gum increases blood flow to the head and can improve alertness during long sessions.',
    category: 'Focus'
  },
  {
    id: '36',
    title: 'Post-Study Review',
    description: 'Spend 5 mins reviewing what you just learned before bed. Your brain consolidates info better during sleep.',
    category: 'Memory'
  },
  {
    id: '37',
    title: 'Dark Mode Everything',
    description: 'Reduces eye strain for late-night sessions. Use warm light filters to preserve melatonin.',
    category: 'Wellness'
  },
  {
    id: '38',
    title: 'Mini-Exams',
    description: 'Create your own quiz before you start. It primes your brain to look for specific answers while reading.',
    category: 'Method'
  },
  {
    id: '39',
    title: 'The 5-Second Rule',
    description: 'When you feel a hesitation to start, count 5-4-3-2-1 and MOVE. Mel Robbins technique to bypass fear.',
    category: 'Focus'
  },
  {
    id: '40',
    title: 'Reward Substitution',
    description: 'Bundle a boring task with something you love (e.g., only eat your favorite snack while doing Math).',
    category: 'Focus'
  },
  {
    id: '41',
    title: 'Mindful Breathing',
    description: '3 deep breaths can lower cortisol and switch your brain from "fight or flight" to "focus" mode.',
    category: 'Wellness'
  },
  {
    id: '42',
    title: 'Visual Hierarchy',
    description: 'Use different colors for Headers, Definitions, and Examples. Helps the brain scan notes faster.',
    category: 'Method'
  },
  {
    id: '43',
    title: 'Digital Minimalism',
    description: 'Delete social apps during exam weeks. If it\'s too easy to access, you will use it when bored.',
    category: 'Focus'
  },
  {
    id: '44',
    title: 'Hydration Tracking',
    description: 'Your brain is 75% water. A 2% drop in hydration causes immediate cognitive decline.',
    category: 'Wellness'
  },
  {
    id: '45',
    title: 'Dual Coding',
    description: 'Pair words with images. Coding the info in two ways makes it much easier for the brain to retrieve.',
    category: 'Memory'
  },
  {
    id: '46',
    title: 'Single Tasking',
    description: 'Multitasking actually drops your IQ by 10 points. Focus on ONE window, ONE tab, ONE goal.',
    category: 'Focus'
  },
  {
    id: '47',
    title: 'Gratitude Loop',
    description: 'Write down 1 thing you learned today you are proud of. Positive reinforcement builds study habits.',
    category: 'Wellness'
  },
  {
    id: '48',
    title: 'The Library Effect',
    description: 'Work in a place where others are working. Social facilitation makes you more productive.',
    category: 'Focus'
  },
  {
    id: '49',
    title: 'Flashcard Sprints',
    description: 'Do 2 minutes of flashcards as fast as possible. High intensity builds speed of recall.',
    category: 'Memory'
  },
  {
    id: '50',
    title: 'Micro-deadlines',
    description: 'Set a timer for 10 mins to finish 1 page. Parkinson\'s Law: Work expands to fill the time available.',
    category: 'Focus'
  },
  {
    id: '51',
    title: 'The 50/10 Rule',
    description: 'Focus for 50 mins, followed by a 10 min break. Good for deep work sessions.',
    category: 'Focus'
  },
  {
    id: '52',
    title: 'Eat Brain Foods',
    description: 'Walnuts, berries, and dark chocolate (70%+) provide fat and antioxidants for neurons.',
    category: 'Wellness'
  },
  {
    id: '53',
    title: 'Mirror Technique',
    description: 'Study while looking at a mirror. It increases self-awareness and accountability.',
    category: 'Focus'
  },
  {
    id: '54',
    title: 'Audio Notes',
    description: 'Record yourself explaining a concept, then listen to it while commuting or walking.',
    category: 'Memory'
  },
  {
    id: '55',
    title: 'Color Psychology',
    description: 'Use blue for productivity, green for focus, and red for details that need high attention.',
    category: 'Method'
  },
  {
    id: '56',
    title: 'Physical Activity',
    description: 'Do 10 jumping jacks when you feel sleepy. Oxygenates the brain instantly.',
    category: 'Wellness'
  },
  {
    id: '57',
    title: 'Environment Switch',
    description: 'Move to a different chair or room for a new subject. Prevents mental stagnation.',
    category: 'Focus'
  },
  {
    id: '58',
    title: 'The Obstacle Principle',
    description: 'Make distractions physically hard to reach (e.g., put console controllers in a high closet).',
    category: 'Focus'
  },
  {
    id: '59',
    title: 'Concrete Examples',
    description: 'When learning an abstract concept, immediately find a real-world example of it.',
    category: 'Memory'
  },
  {
    id: '60',
    title: 'Study Buddies',
    description: 'Teach someone else. The "Protégé Effect" means you learn more by teaching than by studying.',
    category: 'Method'
  },
  {
    id: '61',
    title: 'Mnemonic Pegs',
    description: 'Attach numbers to words (1-Sun, 2-Shoe) to memorize long lists in sequence.',
    category: 'Memory'
  },
  {
    id: '62',
    title: 'The Blank Page Test',
    description: 'Start with a blank page and try to map out an entire chapter without looking. Reveals gaps.',
    category: 'Method'
  },
  {
    id: '63',
    title: 'Focus Sprays',
    description: 'Keep a water mist bottle. Spray your face for a quick alertness hit.',
    category: 'Wellness'
  },
  {
    id: '64',
    title: 'Blue-Sky Thinking',
    description: 'Take a break and look at the sky. Distant horizons rest the eye muscles and relax the mind.',
    category: 'Wellness'
  },
  {
    id: '65',
    title: 'Self-Correction',
    description: 'Always grade your own practice tests. Understanding your mistakes is 90% of the learning.',
    category: 'Method'
  },
  {
    id: '66',
    title: 'The 10-Minute Tidy',
    description: 'Clean your desk for 10 mins before starting. A cluttered space leads to a cluttered mind.',
    category: 'Focus'
  },
  {
    id: '67',
    title: 'The Pomodoro Long',
    description: 'After 4 Pomodoros, take a 30-minute complete break. No screens, no work.',
    category: 'Focus'
  },
  {
    id: '68',
    title: 'Visualization',
    description: 'Close your eyes and visualize the process of a problem, not just the answer.',
    category: 'Memory'
  },
  {
    id: '69',
    title: 'Consistent Routine',
    description: 'Study at the same time every day. Your brain will automatically shift into "work mode" on schedule.',
    category: 'Focus'
  },
  {
    id: '70',
    title: 'Magnesium for Sleep',
    description: 'Consider magnesium at night. Better sleep = better memory consolidation.',
    category: 'Wellness'
  },
  {
    id: '71',
    title: 'The "Just One More" Rule',
    description: 'When you want to quit, do 5 more minutes or one more problem. Builds mental endurance.',
    category: 'Focus'
  },
  {
    id: '72',
    title: 'Salami Slicing',
    description: 'Break a huge project into tiny 15-minute "slices". It stops the task from feeling overwhelming.',
    category: 'Focus'
  },
  {
    id: '73',
    title: 'Reference Cheat Sheet',
    description: 'Make a one-page "formula sheet" for each subject. Condensing info is a learning exercise.',
    category: 'Method'
  },
  {
    id: '74',
    title: 'Digital Forest',
    description: 'Use focus apps (like Forest) that kill your virtual tree if you leave the app.',
    category: 'Focus'
  },
  {
    id: '75',
    title: 'Warm Feet',
    description: 'Keep your feet warm. Cold feet cause the body to restrict blood flow to extremities, distracting the brain.',
    category: 'Wellness'
  },
  {
    id: '76',
    title: 'Acronym creation',
    description: 'Create silly acronyms for lists. The weirder they are, the better they stick.',
    category: 'Memory'
  },
  {
    id: '77',
    title: 'The "No-Phone" Zone',
    description: 'Leave your phone in another room. The mere presence of a phone reduces cognitive capacity.',
    category: 'Focus'
  },
  {
    id: '78',
    title: 'Verbalization',
    description: 'Read difficult passages out loud. It forces processing through both sight and sound.',
    category: 'Method'
  },
  {
    id: '79',
    title: 'Box Breathing',
    description: 'Inhale 4s, Hold 4s, Exhale 4s, Hold 4s. Instantly calms exam anxiety.',
    category: 'Wellness'
  },
  {
    id: '80',
    title: 'Dedications',
    description: 'Pick a person you want to succeed for. Dedicate a hard study session to them.',
    category: 'Focus'
  },
  {
    id: '81',
    title: 'Low-Light Evenings',
    description: 'Use warm, dim lamps an hour before bed to signal your brain it\'s time to wind down.',
    category: 'Wellness'
  },
  {
    id: '82',
    title: 'Contextual Cues',
    description: 'Drink a specific tea or wear a specific hoody ONLY when studying a specific subject.',
    category: 'Memory'
  },
  {
    id: '83',
    title: 'The Deadline Effect',
    description: 'Pretend the exam is tomorrow. Use that pressure to prioritize only the most important 20%.',
    category: 'Method'
  },
  {
    id: '84',
    title: 'Greenery',
    description: 'Have a plant on your desk. Looking at nature reduces stress and improves focus.',
    category: 'Wellness'
  },
  {
    id: '85',
    title: 'Hyper-focus Music',
    description: 'Game soundtracks (Skyrim, Witcher) are designed to be background and enhance focus.',
    category: 'Focus'
  },
  {
    id: '86',
    title: 'Active Listening',
    description: 'In lectures, try to predict what the teacher will say next. Keeps you engaged.',
    category: 'Method'
  },
  {
    id: '87',
    title: 'Sleep on it',
    description: 'If you can\'t solve a problem, look at it right before bed. Your subconscious will work on it.',
    category: 'Wellness'
  },
  {
    id: '88',
    title: 'The 3-2-1 Finish',
    description: 'Stop studying 1 hour before bed. Your brain needs time to "decompress" before sleeping.',
    category: 'Wellness'
  },
  {
    id: '89',
    title: 'Flashcard variety',
    description: 'Don\'t just use text. Draw quick sketches on flashcards for visual recall.',
    category: 'Memory'
  },
  {
    id: '90',
    title: 'Limit Caffeine',
    description: 'Stop caffeine 8-10 hours before bed. It stays in your system much longer than you think.',
    category: 'Wellness'
  },
  {
    id: '91',
    title: 'Reflective Journal',
    description: 'At the end of the day, spend 3 mins writing what worked and what didn\'t.',
    category: 'Method'
  },
  {
    id: '92',
    title: 'Noise Cancelling',
    description: 'Active Noise Cancelling (ANC) headphones reduce background stress you didn\'t even know you had.',
    category: 'Focus'
  },
  {
    id: '93',
    title: 'The "What If" Game',
    description: 'Ask "What if this parameter changed?" for every concept. Deepens understanding.',
    category: 'Method'
  },
  {
    id: '94',
    title: 'Posture Check',
    description: 'Correct your posture. A slouched body tells the brain it\'s tired.',
    category: 'Wellness'
  },
  {
    id: '95',
    title: 'The "Not-To-Do" List',
    description: 'Write down things you are NOT allowed to do (e.g., check Reels, open YouTube).',
    category: 'Focus'
  },
  {
    id: '96',
    title: 'Spaced Repetition Apps',
    description: 'Use Anki or Quizlet for automated spaced repetition. It handles the scheduling for you.',
    category: 'Memory'
  },
  {
    id: '97',
    title: 'The 10-Minute Walk',
    description: 'A quick walk boosts BDNF (brain protein) that helps new neurons grow.',
    category: 'Wellness'
  },
  {
    id: '98',
    title: 'Concept Checklists',
    description: 'List every concept in a syllabus. Ticking them off gives a sense of progress.',
    category: 'Method'
  },
  {
    id: '99',
    title: 'Low Sugar Intake',
    description: 'Sugar spikes lead to crashes. Stick to slow-release carbs like oats for steady energy.',
    category: 'Wellness'
  },
  {
    id: '100',
    title: 'Success Visualization',
    description: 'Spend 1 min imagining yourself finishing the exam with confidence.',
    category: 'Focus'
  },
  {
    id: '101',
    title: 'The Final Review',
    description: 'Never cram the morning of the exam. A light review is enough. Keep the stress low.',
    category: 'Focus'
  }
];
