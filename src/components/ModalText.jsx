// 酒譜篩選選項 - 精簡但有效的分類

 

export default function ModalText({title,tags=[]}){
  return(
    <div className="modal-content">
      {title && <p className="modal-title">{title}</p>}

      {tags.length>0 &&(
        <div className="modal-tags">
        {tags.map((tag,index)=><span key={index}className="tag-item">{tag}</span>)}
        
      </div>)
      }
    </div>

  )
}