import React, { Component, ErrorInfo } from 'react';

type TState = {
  hasError: boolean;
};

type TProps = {
  children: React.ReactNode;
};

export default class ErrorBoundary extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong</h1>;
    }

    return children;
  }
}
