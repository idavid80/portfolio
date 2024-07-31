import './NavSticky.css';
import useSticky from './useSticky';

export default function NavSticky() {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <header className="header">
        <h1>Header</h1>
      </header>
      <nav ref={stickyRef} className={classNames('nav', { sticky })}>
        Sticky nav
      </nav>
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      />
      <main className="content" />
    </>
  );
}