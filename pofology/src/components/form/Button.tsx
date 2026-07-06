import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames(['btn', className])}>{children}</a>
      </Link>
    );
  }
  return (
    <button type={type} className={classNames(['btn', className])}>
      {children}
    </button>
  );
};

export default Button;
