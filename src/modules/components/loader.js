import React from 'react';

export function Loader(props) {
  if (props.isLoading) {
    return 'Loading...';
  } else {
    return null;
  }
}
