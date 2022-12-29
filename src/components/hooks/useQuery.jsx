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

const getWeapons = async () => {
  const response = await fetch("https://valorant-api.com/v1/weapons");
  return response.json();
};

export default function usePosts() {
  const [agentsQuery, mapsQuery, weaponsQuery] = useQueries({
    queries: [
      { queryKey: ["agents"], queryFn: getAgents },
      { queryKey: ["maps"], queryFn: getMaps },
      { queryKey: ["weapon"], queryFn: getWeapons },
    ],
  });

  return { agentsQuery, mapsQuery, weaponsQuery };
}
