import { useEffect, useState } from 'react';

interface DataFormatProps {
    dataISO: string;
  }



export default function DataFormat({ dataISO }: DataFormatProps) {
    const [agora, setAgora] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setAgora(new Date());
        }, 60 * 1000);
  
        return () => clearInterval(timerId);
    }, []);

    const formatarData = (dataISO: string, agora: Date): string => {
        const data = new Date(dataISO);
    
        const diferencaEmMs = agora.getTime() - data.getTime();
        const diferencaEmMinutos = Math.floor(diferencaEmMs / (1000 * 60));
        const diferencaEmHoras = Math.floor(diferencaEmMs / (1000 * 60 * 60));
    
        if (diferencaEmMinutos === 0) {
            return 'Agora';
        } else if (diferencaEmMinutos < 60) {
            return `${diferencaEmMinutos} minutos atrás`;
        } else if (diferencaEmHoras < 24) {
            return `${diferencaEmHoras} horas atrás`;
        } else {
            const opcoes: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Sao_Paulo',
            };
    
            return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
        }
    }; 

  
    return formatarData(dataISO, agora);
}
  