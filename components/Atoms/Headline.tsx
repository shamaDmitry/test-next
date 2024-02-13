interface HeadlineProps {
  className?: string;
  children: React.ReactNode;
}

const Headline = ({ className, children }: HeadlineProps) => {
  return (
    <h1 className={['text-3xl font-bold mb-4', className || ''].join(' ')}>
      {children}
    </h1>
  );
};

export default Headline;
