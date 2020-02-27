import { connect } from 'react-redux';
import WaiterView from './WaiterView';
import { getAll, fetchFromAPI, getLoadingState , sendToAPI} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTable: () => dispatch(fetchFromAPI()),
  changeStatus: (id, newStatus) => dispatch(sendToAPI(id, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterView);
