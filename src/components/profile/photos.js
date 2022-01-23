import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Photos({ photos }) {
    return (
        <div className="h-16 border-t border-gray mt-12 pt-4">
            {!photos ? (
                <Skeleton count={9} width={320} height={400} containerClassName="grid md:grid-cols-3 md:gap-4" />
            ) : photos && photos.length > 0 ? (
                <div className="grid md:grid-cols-3 md:gap-4">
                    {photos && photos.map(photo =>
                        <div key={photo.docId} className="relative group">
                            <img src={photo.imageSrc} alt={photo.caption} />
                        </div>
                    )}
                </div>
            ) : null}

            {!photos || (photos && photos.length === 0 && <p className="text-center text-2xl">No Photos Yet</p>)}
        </div>
    )
}