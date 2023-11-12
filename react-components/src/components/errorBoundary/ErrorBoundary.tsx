import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }
    return this.props.children;
  }
}
