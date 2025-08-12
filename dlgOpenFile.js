//Диалог открытия файла
async function OpenFileDlg() {

//	console.log("OpenFileDialogssss");

//Задаем тип открываемых файлов
        const pickerOpts = {
                types: [{description: "->",accept: {"text/csv": [".csv", ".xlsx"]}}],
                excludeAcceptAllOption: true,
                multiple: false
	};
//показываем диалог
	[fileHandle] = await window.showOpenFilePicker(pickerOpts);
//получаем файл
	const file= fileHandle.getFile();
// возвращаем значение
//	const text= file.text();
//	console.log("OpenFileDialog text="+text);

	return(file);

} 
