import { useState } from 'react';
import './Responses.css';
import JsonViewer from '../Body/Body';

const Responses = ({ data, setStatusData }) => {
	const [status, setStatus] = useState(true);
	const errorText = 'Authorization Problem - either the JWT is malformed or the signature is bad, or permission is denied';
	const statusChangeHandler = () => {
		setStatus(!status);
		setStatusData(!status);
	}

	return <>
		<div className='heading-bar'>
			<div className='responses-heading'>Responses</div>
			<div className='status-buttons'>
				<div
					className={status ? 'active status-200-active' : 'status-200'}
					onClick={statusChangeHandler}
				>
					200
				</div>
				<div
					className={status ? 'status-403' : 'active status-403-active'}
					onClick={statusChangeHandler}
				>
					403
				</div>
			</div>
		</div>
		<div className='status-text'>{status ? 'OK' : errorText}</div>
		<JsonViewer data={data} />
	</>
}

export default Responses;