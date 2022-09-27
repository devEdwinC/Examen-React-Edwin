import { AnyNsRecord } from "dns"
import { IFileWithMeta, IDropzoneProps, IInputProps } from "react-dropzone-uploader"
const PersonalInputFile = ({ accept, onFiles, files, getFilesFromEvent }: IInputProps) => {
    const text = files.length > 0 ? 'Agrega otra imagen' : 'Selecciona / arrastra una imagen'
    return (
        <label style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, marginTop: 60,borderRadius: 3, fontFamily: 'Oswald' }}>
            {text}
            <input
                style={{ display: 'none' }}
                type="file"
                accept={accept}
                multiple
                onChange={(e) => {
                    getFilesFromEvent(e).then((chosenFiles:Array<File>) => {
                        //console.log(chosenFiles)
                        onFiles(chosenFiles)
                    })
                }}
            />
        </label>
    )
}

export default PersonalInputFile;