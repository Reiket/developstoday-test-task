import type {FC} from 'react';

interface Props {
    error: string
}
export const ErrorMessage: FC<Props> = ({error}) => {
    return <p className="text-red-600">{error}</p>;
};
