import React from 'react'

export const FilterLink = ({
  setVisibilityFilter,
  filter,
  children
}) => {
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
    {children}
    </a>
  )
}