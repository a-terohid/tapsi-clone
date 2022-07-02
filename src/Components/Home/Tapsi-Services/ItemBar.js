import React from 'react';

//components
import ItemBarElement from './ItemBarElement.js';

//styled
import styled from 'styled-components';

const ItemBar = ({ Data , FilterItems , value }) => { 
    
    const DIV = styled.div`
    display: flex;
    justify-Content: space-between;
    overflow: auto ;
    white-space: "nowrap"; 
    
  `;
    
    return (
        <DIV  >
            {
                Data.map( item => <div style={{ display: "inline-block"}} >
                    <ItemBarElement 
                                        id={ item.id }
                                        title={ item.title }
                                        icon={ item.icon }
                                        FilterItems={ FilterItems }
                                        value={ value }
                                  />
                </div> )
            }
        </DIV>
    );
};

export default ItemBar;