import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useToast } from 'store/hooks'

interface LinkDataProps {
  name: string;
  address? : string;
}

const UsefulLink = (props: LinkDataProps) => {
  const { toastWarning, toastSuccess } = useToast()

  const handleCopy = () => {
    if (props?.address) {
      toastSuccess('Copied to clipboard')
    } else {
      toastWarning('Oops, unable to copy')
    }
  }
  return (
    <div className="usufull-link">
      <div className="usufull-link__name">
        {props.name}
      </div>
      <div className="usufull-link__address">{props?.address}</div>
      <CopyToClipboard text={props?.address || ''}
        onCopy={handleCopy}>
        <button type="button" className="usufull-link__btn js-copy-clickboard">
          <svg className="svg-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4454 4.19727H4.28831C3.24141 4.19727 2.39111 5.04756 2.39111 6.09446V22.1027C2.39111 23.1496 3.24141 23.9998 4.28831 23.9998H15.4454C16.4923 23.9998 17.3426 23.1496 17.3426 22.1027V6.09446C17.3377 5.04756 16.4874 4.19727 15.4454 4.19727ZM16.0106 22.0977C16.0106 22.4123 15.755 22.6679 15.4405 22.6679H4.28339C3.96883 22.6679 3.71325 22.4123 3.71325 22.0977V6.09446C3.71325 5.7799 3.96883 5.52432 4.28339 5.52432H15.4405C15.755 5.52432 16.0106 5.7799 16.0106 6.09446V22.0977Z" />
            <path d="M19.7117 0H8.55467C7.50777 0 6.65747 0.850297 6.65747 1.89719C6.65747 2.26582 6.95237 2.56072 7.321 2.56072C7.68962 2.56072 7.98452 2.26582 7.98452 1.89719C7.98452 1.58263 8.2401 1.32705 8.55467 1.32705H19.7117C20.0263 1.32705 20.2819 1.58263 20.2819 1.89719V17.9054C20.2819 18.2199 20.0263 18.4755 19.7117 18.4755C19.3431 18.4755 19.0482 18.7704 19.0482 19.1391C19.0482 19.5077 19.3431 19.8026 19.7117 19.8026C20.7586 19.8026 21.6089 18.9523 21.6089 17.9054V1.89719C21.6089 0.850297 20.7586 0 19.7117 0Z" />
          </svg>
        </button>
      </CopyToClipboard>
    </div>
  )
}

export default UsefulLink;