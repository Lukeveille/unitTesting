import React from 'react'

export const FilterLink = ({
  setVisibilityFilter,
  visibilityFilter,
  filter,
  children
}) => {
  return (
    <a href='#'
      style={{ textDecoration: visibilityFilter === filter? 'underline' : 'none' }}
      onClick={e => {
        e.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
    {children}
    </a>
  )
}