import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, href, onClick, disabled }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames(['btn', className])}>{children}</a>
      </Link>
    );
  }
  return (
    <button type={type} className={classNames(['btn', className])} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
