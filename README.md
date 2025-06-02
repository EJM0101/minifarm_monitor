# 🌱 MiniFarm Monitor

**MiniFarm Monitor** est une application pédagogique web qui simule un système embarqué temps réel, comme une ferme intelligente connectée à des capteurs (température, humidité).

## 🎯 Objectifs pédagogiques

- Simuler des systèmes embarqués (ex : ESP32) sans matériel physique
- Comprendre l’envoi de données capteurs vers un serveur cloud (HTTP)
- Visualiser en temps réel le comportement d’un système IoT
- Utiliser les WebSocket pour les flux en direct
- Application simple, sans base de données

## 🚀 Lancer l'application

```bash
npm install
npm start         # Lancer le serveur
npm run simulate  # Lancer le simulateur de capteurs (facultatif)
```

Puis visiter : `http://localhost:3000`

## 🧪 Exemple API POST (simulation capteur HTTP)

```bash
curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" \
  -d '{"capteur":"ESP32", "type":"Température", "valeur":28.4}'
```

---
> Ce projet est idéal pour les étudiants en IoT, embarqué, ou temps réel.