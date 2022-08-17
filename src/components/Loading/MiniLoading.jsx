import './Loading'

const MiniLoading = (status = true) => {


    /* const spinner = document.querySelector('.lds-grid')
    if(status){
        spinner.style.display = 'inline-block'
    } else{
        spinner.style.display = none 
    } */

    return (
        <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MiniLoading