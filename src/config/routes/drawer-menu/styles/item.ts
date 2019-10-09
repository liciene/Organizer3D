import { Text, Theme, TouchableRipple } from 'react-native-paper';
import NativeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface Item {
    active: boolean;
    theme: Theme;
}

export const Button = styled(TouchableRipple)<Item>`
    flex-direction: row;
    padding: 10px;
    align-items: center;
    background-color: ${props => (props.active ? `${props.theme.colors.primary}df` : '#fff')};
`;

export const Icon = styled(NativeIcon)<Item>`
    margin-right: 10px;
    color: ${props => (props.active ? props.theme.colors.accent : props.theme.colors.disabled)};
`;

export const Title = styled(Text)<Item>`
    font-size: 18px;
    color: ${props => (props.active ? '#fff' : '#0f0f0f')};
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;
