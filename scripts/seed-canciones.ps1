$canciones = @(
  @{ titulo="Summertime Sadness"; album="Born to Die"; duracion="4:25"; reproducciones_spotify=1850230120; url_spotify="https://open.spotify.com/intl-es/track/3BJe4B8zGnqEdQPMvfVjuS" },
  @{ titulo="Ultraviolence"; album="Ultraviolence"; duracion="4:11"; reproducciones_spotify=920140500; url_spotify="https://open.spotify.com/intl-es/track/1y3r6RXiJZNBV1EI0NggpS" },
  @{ titulo="Video Games"; album="Born to Die"; duracion="4:41"; reproducciones_spotify=1210450890; url_spotify="https://open.spotify.com/intl-es/track/0fBSs3fRoh1yJcne77fdu9" },
  @{ titulo="West Coast"; album="Ultraviolence (Deluxe)"; duracion="4:16"; reproducciones_spotify=780920300; url_spotify="https://open.spotify.com/intl-es/track/5Y6nVaayzitvsD5F7nr3DV" },
  @{ titulo="Norman fucking Rockwell"; album="Norman Fucking Rockwell!"; duracion="4:08"; reproducciones_spotify=640110200; url_spotify="https://open.spotify.com/intl-es/track/3RIgHHpnFKj5Rni1shokDj" },
  @{ titulo="A&W"; album="Did you know that there's a tunnel under Ocean Blvd"; duracion="7:13"; reproducciones_spotify=310500800; url_spotify="https://open.spotify.com/intl-es/track/5nW4z3pfZgJAJ2QTCz9AIE" },
  @{ titulo="Born to Die"; album="Born to Die"; duracion="4:45"; reproducciones_spotify=1150800000; url_spotify="https://open.spotify.com/intl-es/track/4Ouhoi2lAhrLJKFzUqEzwl" },
  @{ titulo="Lust for Life (feat. The Weeknd)"; album="Lust for Life"; duracion="4:24"; reproducciones_spotify=620400000; url_spotify="https://open.spotify.com/intl-es/track/0mt02gJ425Xjm7c3jYkOBn" },
  @{ titulo="Cinnamon Girl"; album="Norman Fucking Rockwell!"; duracion="5:00"; reproducciones_spotify=710200000; url_spotify="https://open.spotify.com/intl-es/track/2mdEsXPu8ZmkHRRtAdC09e" },
  @{ titulo="Cherry"; album="Lust for Life"; duracion="3:00"; reproducciones_spotify=441727257; url_spotify="https://open.spotify.com/intl-es/track/1Ym6aMuT5bliaZMC67AmPp" },
  @{ titulo="Art Deco"; album="Honeymoon"; duracion="4:55"; reproducciones_spotify=632963016; url_spotify="https://open.spotify.com/intl-es/track/5jqNQZBwbZWQXPWfo0ygZF" },
  @{ titulo="Chemtrails over the Country Club"; album="Chemtrails over the Country Club"; duracion="4:31"; reproducciones_spotify=280600000; url_spotify="https://open.spotify.com/intl-es/track/7bPWdJgx8vek7S5i5yAtvG" }
)

foreach ($c in $canciones) {
  try {
    $json = $c | ConvertTo-Json
    Invoke-RestMethod -Method Post -Uri "http://localhost:3001/canciones" -ContentType "application/json; charset=utf-8" -Body $json | Out-Null
    Write-Host "OK: $($c.titulo)" -ForegroundColor Green
  } catch {
    Write-Host "ERROR en $($c.titulo): $($_.Exception.Message)" -ForegroundColor Red
  }
}