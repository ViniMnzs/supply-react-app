import styled from 'styled-components';
import { MdLocalGasStation } from 'react-icons/md';

export const Select = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    :hover {
        background-color: #c9c9c9;
        * {
            background-color: #c9c9c9;
        }
    }
    * {
        width: 20%;
    }
`;

export const StationIcon = styled(MdLocalGasStation)`

`;