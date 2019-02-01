import React from 'react'
import { FilterLink } from './FilterLink.js'

export const Footer = ({
  filters,
  visibilityFilter,
  setVisibilityFilter,
}) => (
  <p>
    Show:
    {filters.map((filter) => {
      return (
      <span key={filter.action}>
        {' '}
        <FilterLink
          filter={filter.action}
          setVisibilityFilter={setVisibilityFilter}
          visibilityFilter={visibilityFilter}
          children={filter.name}
        />
      </span>
      )
    })}
  </p>
)