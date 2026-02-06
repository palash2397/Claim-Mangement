function errorHandler(err, req, res, next) {
  console.error("❌ ERROR:", err);
  res.status(err.status || 500).json({
    ok: false,
    message: err.message || "Internal Server Error",
  });
}

export { errorHandler };
