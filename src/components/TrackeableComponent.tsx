import { withTracking } from "../withTracking";

const MyTrackeableComponent = (): JSX.Element => {
    return <div>TrackeableComponent</div>;
};

export const TrackeableComponent = withTracking(MyTrackeableComponent);
