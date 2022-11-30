const filterForm = document.forms['searchForm'];


if (window.location.search) {
    const params = {};

    const arrayStringParams = window.location.search.substring(1).split('&')

    for (let stringParam of arrayStringParams) {
        const param = stringParam.split('=');
        const paramKey = param[0];
        const paramValue = param[1];

        if (paramKey in params) {
            params[paramKey].push(paramValue);
        } else {
            params[paramKey] = [];
        }
    }

    const updateInputs = (inputs, typeParam) => {
        for (let input of inputs) {
            const param = params[typeParam]
            for (partParam of param) {
                if (partParam === input.value) {
                    input.checked = true;
                }
            }
        }
    }

    updateInputs(filterForm.tags, 'tags')
    updateInputs(filterForm.views, 'views')
    updateInputs(filterForm.comments, 'comments')
    updateInputs(filterForm.show, 'show')
    updateInputs(filterForm.sort, 'sort')
}



filterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const arrayCheckedInputs = [];

    const addCheckedInput = (inputGroup, nameOfInputsGroup) => {
        for (checkbox of inputGroup) {
            if (checkbox.checked) {
                arrayCheckedInputs.push(`${nameOfInputsGroup}=${checkbox.value}`)
            }
        }
    }

    addCheckedInput(e.target.tags, 'tags')
    addCheckedInput(e.target.views, 'views')
    addCheckedInput(e.target.comments, 'comments')
    addCheckedInput(e.target.show, 'show')
    addCheckedInput(e.target.sort, 'sort')

    let checkedValueString = '';

    for ([index, element] of arrayCheckedInputs.entries()) {
        checkedValueString += element
        if(index !== arrayCheckedInputs.length - 1){
            checkedValueString += '&'
        }
    }

    const baseUrl = `${location.origin}${location.pathname}`
    const newUrl = `${baseUrl}?${checkedValueString}`
    window.location = newUrl;
});





const filterForm2 = document.forms['searchForm1080px'];

if (window.location.search) {
    const params = {};

    const arrayStringParams = window.location.search.substring(1).split('&')

    for (let stringParam of arrayStringParams) {
        const param = stringParam.split('=');
        const paramKey = param[0];
        const paramValue = param[1];

        if (paramKey in params) {
            params[paramKey].push(paramValue);
        } else {
            params[paramKey] = [];
        }
    }

    const updateInputs = (inputs, typeParam) => {
        for (let input of inputs) {
            const param = params[typeParam]
            for (partParam of param) {
                if (partParam === input.value) {
                    input.checked = true;
                }
            }
        }
    }

    updateInputs(filterForm2.tags, 'tags')
    updateInputs(filterForm2.views, 'views')
    updateInputs(filterForm2.comments, 'comments')
    updateInputs(filterForm2.show, 'show')
    updateInputs(filterForm2.sort, 'sort')
}

filterForm2.addEventListener('submit', (e) => {
    e.preventDefault();

    const arrayCheckedInputs = [];

    const addCheckedInput = (inputGroup, nameOfInputsGroup) => {
        for (checkbox of inputGroup) {
            if (checkbox.checked) {
                arrayCheckedInputs.push(`${nameOfInputsGroup}=${checkbox.value}`)
            }
        }
    }

    addCheckedInput(e.target.tags, 'tags')
    addCheckedInput(e.target.views, 'views')
    addCheckedInput(e.target.comments, 'comments')
    addCheckedInput(e.target.show, 'show')
    addCheckedInput(e.target.sort, 'sort')

    let checkedValueString = '';

    for ([index, element] of arrayCheckedInputs.entries()) {
        checkedValueString += element
        if(index !== arrayCheckedInputs.length - 1){
            checkedValueString += '&'
        }
    }

    const baseUrl = `${location.origin}${location.pathname}`
    const newUrl = `${baseUrl}?${checkedValueString}`
    window.location = newUrl;
});