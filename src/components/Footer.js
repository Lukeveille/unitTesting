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
          visibilityFilter={visibilityFilter}
          children={filter.name}
          setVisibilityFilter={setVisibilityFilter}
        />
      </span>
      )
    })}
  </p>
)
