import { useQueries } from "@tanstack/react-query";

const getAgents = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=fr-FR"
  );
  return response.json();
};

const getMaps = async () => {
  const response = await fetch("https://valorant-api.com/v1/maps");
  return response.json();
};

export default function usePosts() {
  const [agentsQuery, mapsQuery] = useQueries({
    queries: [
      { queryKey: ["agents"], queryFn: getAgents },
      { queryKey: ["maps"], queryFn: getMaps },
    ],
  });

  return [agentsQuery, mapsQuery];
}
