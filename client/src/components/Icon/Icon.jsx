import { Search, ShoppingBag, ChevronDown, Menu, X, Phone, Mail, MapPin } from 'react-feather';
import styled from 'styled-components';

const ICONS = {
    search: Search,
    'chevron-down': ChevronDown,
    menu: Menu,
    'dismiss-icon': X,
    'phone': Phone,
    'email': Mail,
    "address": MapPin

}

const Icon = ({ icon, size, strokeWidth, color, ...delegated }) => {

    const Component = ICONS[icon]
    return (
        <Wrapper strokeWidth={strokeWidth} {...delegated}>
            <Component color={color} size={size} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & > svg {
        stroke-width: ${(props) => props.strokeWidth}px;
        display: block;
    }
    cursor: pointer;
`;
export default Icon