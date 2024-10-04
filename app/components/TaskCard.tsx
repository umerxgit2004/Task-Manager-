"use client"
import { FC, useEffect, useState } from "react";



interface TaskCardProps{
    title: string;
    description: string;
    date: string | Date;
    status: "Completed" | "Incomplete";
    onUpdate: (updatedTitle: string, updatedDescription: string) => void;

}


const TaskCard : FC<TaskCardProps> = ({title,description,date,status,onUpdate}) =>{
    const [isExpanded,setIsExpanded] = useState(false)
    const [LocalTitle, setLocalTitle] = useState(title)
    const [localDescription, setLocalDescription] = useState(description);

    const statusClass = status === 'Completed' ? 'bg-green-200' : 'bg-red-200';
    const statusText = status === 'Completed' ? 'Completed' : 'Incomplete';
    
    const handleCardClick = () => {
        setIsExpanded(!isExpanded); 
      };

     // Update local state when props change (initial load)
    useEffect(() => {
    setLocalTitle(title);
    setLocalDescription(description);
  }, [title, description]);

  const stopPropagation = (e:React.MouseEvent<HTMLInputElement| HTMLTextAreaElement>) =>{
    e.stopPropagation()
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(e.target.value);
    onUpdate(e.target.value, localDescription); // Update as user types
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalDescription(e.target.value);
    onUpdate(e.target.value, LocalTitle); // Update as user types
  };

      
    return (
        <div
        className={`p-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 ${ isExpanded ? "w-full h-auto" : "w-full h-auto"  }`}
         onClick={handleCardClick}>   

                {isExpanded?(
                    <div className="expandedView&editing flex flex-col">
                        <input 
                        className="font-bold text-lg mb-2 p-2 text-gray-800"
                        value={LocalTitle}
                        onClick={stopPropagation}
                        onChange={handleTitleChange}
                        />
                   
                        <textarea
                             className="text-gray-700 mb-4 p-2"
                             value={localDescription}
                             onClick={stopPropagation}
                             onChange={handleDescriptionChange}
                             />
                          <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{String(date)}</span>
                                <span className={`px-2 py-1 rounded ${statusClass}`}>{statusText}</span>
                        </div>
                    </div>
                ):(
                    <div className="normal-view">
                    <h3 className="font-bold text-lg mb-2 text-gray-600">{title}</h3>
                        <p  className="text-gray-700 mb-4">{description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{String(date)}</span>
                            <span className={`px-2 py-1 rounded ${statusClass}`}>
                            {statusText}
                            </span>
                        </div>
                    </div>  
                )}

                    
                
       
        </div>
    )
}

export default TaskCard;