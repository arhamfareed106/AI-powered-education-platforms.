import React, { useState, useRef } from 'react'

interface AudioRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        const audioUrl = URL.createObjectURL(audioBlob)
        setAudioUrl(audioUrl)
        onRecordingComplete(audioBlob)
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      
      // Stop all tracks to release the microphone
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded-lg transition duration-300 ${
          isRecording 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      
      {audioUrl && (
        <div className="flex items-center space-x-2">
          <audio controls src={audioUrl} className="h-10" />
          <button
            onClick={() => setAudioUrl(null)}
            className="text-red-600 hover:text-red-800"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default AudioRecorder