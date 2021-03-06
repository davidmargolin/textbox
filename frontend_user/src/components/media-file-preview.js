import React from 'react'

const MediaPreview = ({ file, toggle }) => (
    <div style={{margin: '0.5rem', width: '15rem', height: '15rem', cursor: 'pointer', backgroundColor: 'black'}} onClick={() => toggle(file)}>
        <img src={file.data} style={{height: '15rem', width: '15rem', objectFit: 'cover'}} alt={file.name}/>
    </div>
)

export default MediaPreview