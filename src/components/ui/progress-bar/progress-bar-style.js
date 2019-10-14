import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
	width: 100%;
    height: 5px;
    border-radius: 20px;
    background-color: #e0fdd2;
    border: 1px solid #bfcac2;
    margin: 0 50px;
    position: relative;
    overflow: hidden;
    &:before {
    	content: '';
	    position: absolute;
	    left: 0;
	    top: 0;
	    transition: width 1s;
	    width: ${props => props.percentage || 0 }%;
	    height: 100%;
	    background-color: #53da3f;
    }
`;

export default ProgressBarWrapper;