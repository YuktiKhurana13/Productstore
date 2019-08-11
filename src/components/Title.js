import React from 'react';

function Title({name,Title}){
    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-title text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-Blue">
                        {Title}
                    </strong>
                </h1>
            </div>
        </div>
    );
}

export default Title;