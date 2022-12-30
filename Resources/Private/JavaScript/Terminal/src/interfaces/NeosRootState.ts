import { DefaultRootState } from 'react-redux';

export default interface NeosRootState extends DefaultRootState {
    user?: {
        name?: string;
    };
}
