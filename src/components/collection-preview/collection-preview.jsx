import CollectionItem from "../collection-item/collection-item.componnet"
import './collection-preview.styles.scss'

const CollectionPreview=({title, items})=> (
          <div className='collection-preview'>
               <div className='title'>{title.toUpperCase()}</div>
               <div className='preview'>
                    {
                         items.filter((item, idx)=>idx<4).map(item=>(
                              <CollectionItem key={item.id} item={item}/>
                         ))
                    }
               </div>
          </div>
)

export default CollectionPreview
