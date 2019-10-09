import * as React from 'react';
import { FlatList } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatusBar from '../../../components/status-bar';
import { RootActions, RootState } from '../../../config/store/typescript';
import { EmptyList, RenderItem } from '../components/filaments-list';
import * as filamentsActions from '../store/actions';
import { Filament } from '../store/typescript';
import styles from './styles/filaments-list';
import { Props } from './typescript/filaments-list';

class FilamentsList extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: NavigationInjectedProps): NavigationStackOptions => ({
        header: () => (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Filaments List" />
            </Appbar.Header>
        ),
    });

    constructor(props: Props) {
        super(props);
        this.handleSelectFilament = this.handleSelectFilament.bind(this);
        this.handleDeleteFilament = this.handleDeleteFilament.bind(this);
        this.handleEditFilament = this.handleEditFilament.bind(this);
    }

    protected handleSelectFilament = (id: string) => {
        const { filamentsDispatch } = this.props;

        filamentsDispatch.selectFilament(id);
    };

    protected handleDeleteFilament = (id: string) => {
        const { filamentsDispatch } = this.props;

        filamentsDispatch.deleteFilament(id);
    };

    protected handleEditFilament = (item: Filament) => {
        const { navigation } = this.props;

        navigation.navigate('newFilament', { item });
    };

    protected renderItem = ({ item }: { item: Filament }) => {
        const { filamentsReducer } = this.props;
        let selected = false;
        if (filamentsReducer.filamentSelected) {
            selected = filamentsReducer.filamentSelected.id === item.id;
        }
        return (
            <RenderItem
                handleDeleteFilament={this.handleDeleteFilament}
                handleSelectFilament={this.handleSelectFilament}
                handleEditFilament={this.handleEditFilament}
                item={item}
                selected={selected}
            />
        );
    };

    protected ListEmptyComponent = () => <EmptyList />;

    protected handleAddFilament = () => {
        const { navigation } = this.props;
        navigation.navigate('newFilament');
    };

    public render() {
        const { filamentsReducer } = this.props;
        return (
            <>
                <StatusBar />
                <FlatList
                    data={filamentsReducer.filaments}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.ListEmptyComponent}
                    refreshing={filamentsReducer.loading}
                    extraData={filamentsReducer.filaments.length}
                    keyExtractor={item => item.id}
                />
                <FAB icon="add" style={styles.fab} onPress={this.handleAddFilament} />
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    filamentsReducer: state.filamentReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    filamentsDispatch: bindActionCreators(filamentsActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilamentsList);
