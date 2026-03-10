import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    slug: 'why-smbs-need-custom-software',
    title: 'Why SMBs Need Custom Software in 2026',
    excerpt: 'Off-the-shelf tools can only take you so far. Here's how custom software gives growing businesses a competitive edge.',
    author: 'NexaBuilds Team',
    date: 'Mar 5, 2026',
    readTime: '5 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    slug: 'automate-or-stagnate',
    title: 'Automate or Stagnate: The Business Case for Workflow Automation',
    excerpt: 'Manual processes cost more than you think. We break down the ROI of automating your most repetitive tasks.',
    author: 'NexaBuilds Team',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    slug: 'choosing-the-right-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Next Project',
    excerpt: 'React, Node, Python, or Go? The answer depends on your goals, team, and timeline—not hype cycles.',
    author: 'NexaBuilds Team',
    date: 'Feb 8, 2026',
    readTime: '6 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
];

export default function BlogSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Insights & Ideas
          </h2>
          <p className="text-muted-foreground text-lg">
            Practical thinking on software, automation, and digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.slug}
              className={`group border border-border bg-background overflow-hidden transition-all duration-700 ease-out hover:border-primary/40 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.95]'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
