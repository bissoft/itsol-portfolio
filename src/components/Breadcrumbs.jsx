// components/Breadcrumbs.jsx
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-600">
      <ul className="flex gap-2">
        <li><Link to="/">Home</Link></li>
        {paths.map((segment, index) => {
          const to = '/' + paths.slice(0, index + 1).join('/');
          return (
            <li key={to}>
              / <Link to={to}>{decodeURIComponent(segment)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
