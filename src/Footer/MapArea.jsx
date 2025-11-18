import React from 'react'

function MapArea() {
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3293.4533342520926!2d77.80929847507282!3d12.7563018875396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ1JzIyLjciTiA3N8KwNDgnNDIuNyJF!5e1!3m2!1sen!2sin!4v1756959581412!5m2!1sen!2sin" height="450" style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full'></iframe>
    </div>
  )
}

export default MapArea
