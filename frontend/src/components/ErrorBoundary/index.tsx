import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    // @ts-ignore
    const { hasError } = this.state;
    // @ts-ignore
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong</h1>;
    }

    return children;
  }
}
