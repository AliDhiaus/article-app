// lib/dummy-data.js
export const dummyUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Regular User',
    email: 'user@example.com',
    role: 'user'
  }
];

export const dummyCategories = [
  {
    id: 1,
    name: 'Technology',
    description: 'Articles about technology and programming',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Health & Wellness',
    description: 'Health tips and wellness advice',
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  },
  {
    id: 3,
    name: 'Business',
    description: 'Business insights and entrepreneurship',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z'
  },
  {
    id: 4,
    name: 'Lifestyle',
    description: 'Lifestyle and personal development',
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-04T00:00:00Z'
  },
  {
    id: 5,
    name: 'Education',
    description: 'Educational content and learning resources',
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z'
  }
];

export const dummyArticles = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    content: 'Next.js 14 introduces several exciting features including the stable App Router, Server Components, and improved performance. In this comprehensive guide, we\'ll explore how to build modern web applications with Next.js 14.\n\nThe App Router provides a new way to organize your application with file-system based routing that supports layouts, nested routing, loading states, error handling, and more. Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client.\n\nTo get started, create a new Next.js project using: npx create-next-app@latest my-app. This will set up a new project with all the latest features enabled by default.',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and its new App Router.',
    category_id: 1,
    category: dummyCategories[0],
    author: 'John Doe',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    title: '10 Healthy Habits for Remote Workers',
    content: 'Working from home has become the new normal for many professionals. While remote work offers flexibility, it also presents unique challenges for maintaining physical and mental health.\n\nHere are 10 essential habits that can help remote workers stay healthy and productive:\n\n1. Establish a dedicated workspace\n2. Stick to a regular schedule\n3. Take regular breaks\n4. Stay hydrated\n5. Exercise regularly\n6. Maintain social connections\n7. Set boundaries between work and personal life\n8. Practice good posture\n9. Get adequate sleep\n10. Take care of your mental health\n\nBy implementing these habits consistently, remote workers can maintain their well-being while enjoying the benefits of working from home.',
    excerpt: 'Essential habits for maintaining health and productivity while working remotely.',
    category_id: 2,
    category: dummyCategories[1],
    author: 'Jane Smith',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    created_at: '2024-01-14T09:30:00Z',
    updated_at: '2024-01-14T09:30:00Z'
  },
  {
    id: 3,
    title: 'Building a Startup: Lessons Learned',
    content: 'Starting a business is one of the most challenging yet rewarding experiences an entrepreneur can undertake. Over the past three years of building my startup, I\'ve learned valuable lessons that I wish I knew from the beginning.\n\nThe most important lesson is that product-market fit is everything. Without it, even the best marketing and sales efforts will fail. Spend time understanding your customers\' pain points and validate your solution before scaling.\n\nAnother crucial aspect is building a strong team. Your first hires will shape the culture and direction of your company. Look for people who share your vision and complement your skills.\n\nFinally, don\'t underestimate the importance of financial management. Keep a close eye on your burn rate and always have a plan for the next funding round or path to profitability.',
    excerpt: 'Key lessons learned from three years of building a successful startup.',
    category_id: 3,
    category: dummyCategories[2],
    author: 'Mike Johnson',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    created_at: '2024-01-13T14:20:00Z',
    updated_at: '2024-01-13T14:20:00Z'
  },
  {
    id: 4,
    title: 'Mastering React Hook Form with Zod',
    content: 'Form handling in React applications can be complex, but React Hook Form combined with Zod validation makes it much easier and more maintainable.\n\nReact Hook Form provides excellent performance with minimal re-renders and built-in validation support. When combined with Zod, a TypeScript-first schema validation library, you get type-safe forms with excellent developer experience.\n\nHere\'s a simple example of how to use them together:\n\n```javascript\nimport { useForm } from \'react-hook-form\';\nimport { zodResolver } from \'@hookform/resolvers/zod\';\nimport { z } from \'zod\';\n\nconst schema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8)\n});\n\nconst MyForm = () => {\n  const { register, handleSubmit, formState: { errors } } = useForm({\n    resolver: zodResolver(schema)\n  });\n\n  const onSubmit = (data) => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register(\'email\')} />\n      {errors.email && <span>{errors.email.message}</span>}\n      \n      <input type="password" {...register(\'password\')} />\n      {errors.password && <span>{errors.password.message}</span>}\n      \n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n```\n\nThis approach provides excellent type safety and validation with minimal boilerplate code.',
    excerpt: 'Learn how to build robust forms using React Hook Form and Zod validation.',
    category_id: 1,
    category: dummyCategories[0],
    author: 'Sarah Wilson',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    created_at: '2024-01-12T11:15:00Z',
    updated_at: '2024-01-12T11:15:00Z'
  },
  {
    id: 5,
    title: 'The Art of Minimalist Living',
    content: 'Minimalism isn\'t just about having fewer possessions; it\'s about creating space for what truly matters in your life. In our consumer-driven society, we often accumulate things that don\'t add value to our lives.\n\nThe journey to minimalist living starts with understanding your values and priorities. What brings you joy and fulfillment? What are your core needs versus wants?\n\nStart small by decluttering one area at a time. Ask yourself: Does this item serve a purpose? Does it bring me joy? Have I used it in the past year? If the answer is no to these questions, consider letting it go.\n\nMinimalism also extends beyond physical possessions to digital clutter, commitments, and even relationships. The goal is to create intentional space in all areas of your life.\n\nRemember, minimalism looks different for everyone. It\'s not about living with the bare minimum, but about being intentional with your choices and focusing on quality over quantity.',
    excerpt: 'Discover how minimalist living can create space for what truly matters in your life.',
    category_id: 4,
    category: dummyCategories[3],
    author: 'Emma Brown',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    created_at: '2024-01-11T16:45:00Z',
    updated_at: '2024-01-11T16:45:00Z'
  },
  {
    id: 6,
    title: 'Online Learning: The Future of Education',
    content: 'The pandemic accelerated the adoption of online learning, but the benefits extend far beyond emergency remote education. Online learning platforms are revolutionizing how we acquire new skills and knowledge.\n\nOne of the biggest advantages is accessibility. Geographic barriers are eliminated, allowing students from anywhere in the world to access quality education. This democratization of learning is particularly powerful for people in underserved communities.\n\nFlexibility is another key benefit. Learners can study at their own pace, on their own schedule. This is especially valuable for working professionals who want to upskill or change careers.\n\nInteractive technologies like virtual reality, AI-powered tutoring, and gamification are making online learning more engaging than traditional classroom instruction.\n\nHowever, online learning also presents challenges. Self-discipline and motivation are crucial for success. The lack of face-to-face interaction can also be a drawback for some learners.\n\nAs technology continues to evolve, we can expect online learning to become even more sophisticated and effective.',
    excerpt: 'How online learning platforms are transforming education and skill development.',
    category_id: 5,
    category: dummyCategories[4],
    author: 'David Lee',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    created_at: '2024-01-10T13:30:00Z',
    updated_at: '2024-01-10T13:30:00Z'
  },
  {
    id: 7,
    title: 'Sustainable Business Practices',
    content: 'Sustainability is no longer just a nice-to-have for businesses; it\'s becoming essential for long-term success. Consumers are increasingly choosing brands that align with their values, and investors are prioritizing ESG (Environmental, Social, and Governance) factors.\n\nImplementing sustainable practices can also lead to cost savings. Energy-efficient operations, waste reduction, and sustainable supply chains often result in lower operational costs.\n\nSome practical steps businesses can take include:\n\n1. Conducting a sustainability audit to identify areas for improvement\n2. Setting measurable sustainability goals\n3. Investing in renewable energy sources\n4. Implementing circular economy principles\n5. Engaging employees in sustainability initiatives\n6. Partnering with sustainable suppliers\n7. Transparently reporting on sustainability progress\n\nThe key is to start small and gradually expand your sustainability efforts. Every step towards sustainability makes a difference.',
    excerpt: 'Why sustainable business practices are essential for long-term success.',
    category_id: 3,
    category: dummyCategories[2],
    author: 'Lisa Chen',
    published: true,
    featured_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    created_at: '2024-01-09T08:20:00Z',
    updated_at: '2024-01-09T08:20:00Z'
  }
]

export const TabelCategory = [
  { id: 1, name: "Technology", createdAt: "2025-09-05" },
  { id: 2, name: "Health", createdAt: "2025-09-05" },
  { id: 3, name: "Education", createdAt: "2025-09-05" },
]